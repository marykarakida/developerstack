import questionRepository from '../repositories/questionRepository';
import { IQuestionData } from '../types/questionTypes';

async function createQuestion(questionData: IQuestionData) {
    const { askedBy, question } = questionData;

    await questionRepository.insert({ askedBy, question });
}

async function get() {
    const questions = await questionRepository.get();

    return questions;
}

async function getById(id: string) {
    const questionWithAnswers = await questionRepository.getById(id);

    return questionWithAnswers;
}

export default { createQuestion, get, getById };
