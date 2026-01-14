'use server';

import { initializeFirebase } from '@/firebase';
import { errorEmitter } from '@/firebase/error-emitter';
import { FirestorePermissionError } from '@/firebase/errors';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(2, { message: 'O nome é obrigatório.' }),
  email: z.string().email({ message: 'Por favor, insira um email válido.' }),
  phone: z.string().min(10, { message: 'Por favor, insira um telefone válido.' }),
  message: z
    .string()
    .min(10, { message: 'A mensagem deve ter pelo menos 10 caracteres.' }),
});

export async function saveContactMessage(
  data: z.infer<typeof contactSchema>
): Promise<{ success: boolean; error?: string }> {
  try {
    const { firestore } = initializeFirebase();
    if (!firestore) {
      throw new Error('Firestore is not initialized.');
    }

    const validatedData = contactSchema.parse(data);

    const contactData = {
      ...validatedData,
      createdAt: serverTimestamp(),
    };

    const collectionRef = collection(firestore, 'contacts');

    await addDoc(collectionRef, contactData).catch(serverError => {
      const permissionError = new FirestorePermissionError({
        path: collectionRef.path,
        operation: 'create',
        requestResourceData: contactData,
      });
      errorEmitter.emit('permission-error', permissionError);
      // Throw a specific error to be caught by the outer try/catch
      throw new Error('Failed to save message due to a permission issue.');
    });

    return { success: true };
  } catch (error: unknown) {
    let errorMessage = 'An unexpected error occurred.';
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}
