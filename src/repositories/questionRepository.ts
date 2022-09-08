import { IQuestionData } from '../types/questionTypes';
import { prisma } from '../config/database';

async function insert(questionData: IQuestionData) {
    const { askedBy, question } = questionData;

    await prisma.question.create({
        data: { askedBy, question },
    });
}

async function get() {
    const result = await prisma.question.findMany({
        select: {
            id: true,
            question: true,
            askedBy: true,
        },
    });

    return result;
}

async function getById(id: string) {
    const result = await prisma.question.findUnique({
        where: { id },
        include: {
            answers: {
                select: {
                    answeredBy: true,
                    answer: true,
                },
            },
        },
    });

    return result;
}

export default { insert, get, getById };
