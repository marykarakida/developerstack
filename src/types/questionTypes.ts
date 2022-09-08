import { Question } from '@prisma/client';

export type IQuestionData = Omit<Question, 'id' | 'createdAt'>;
