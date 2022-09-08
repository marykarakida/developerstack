import answerRepository from '../repositories/answerRepository';
import { IAnswerData } from '../types/answerTypes';

import questionService from './questionService';

async function createAnswer(answerData: IAnswerData) {
    const { questionId, answer, answeredBy } = answerData;

    await questionService.getById(questionId);

    await answerRepository.insert({ questionId, answer, answeredBy });
}

export default { createAnswer };
