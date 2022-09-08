import { Request, Response } from 'express';

import questionService from '../services/questionService';
import answerService from '../services/answerService';

export async function createQuestion(req: Request, res: Response) {
    const { askedBy, question } = req.body;

    await questionService.createQuestion({ askedBy, question });

    res.status(201).send();
}

export async function createAnswer(req: Request, res: Response) {
    const { id: questionId } = req.params;
    const { answeredBy, answer } = req.body;

    await answerService.createAnswer({ questionId, answeredBy, answer });

    res.status(201).send();
}

export async function get(req: Request, res: Response) {
    const questions = await questionService.get();

    res.status(200).send(questions);
}

export async function getById(req: Request, res: Response) {
    const { id } = req.params;

    const questionWithAnswers = await questionService.getById(id);

    res.status(200).send(questionWithAnswers);
}
