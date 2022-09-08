import answerRepository from '../repositories/answerRepository';
import { IAnswerData } from '../types/answerTypes';

async function createAnswer(answerData: IAnswerData) {
    const { questionId, answer, answeredBy } = answerData;

    await answerRepository.insert({ questionId, answer, answeredBy });
}

export default { createAnswer };
