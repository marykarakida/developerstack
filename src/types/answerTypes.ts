import { Answer } from '@prisma/client';

export type IAnswerData = Omit<Answer, 'id' | 'createdAt'>;
