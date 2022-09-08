import { IAnswerData } from '../types/answerTypes';
import { prisma } from '../config/database';

async function insert(answerData: IAnswerData) {
    const { questionId, answeredBy, answer } = answerData;

    await prisma.answer.create({
        data: { questionId, answeredBy, answer },
    });
}

export default { insert };
