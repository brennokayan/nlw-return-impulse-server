import express from 'express';
import { prisma } from './prisma';
import nodemailer from "nodemailer"; 
import { SubmitFeedbackUseCase } from './use-cases/submit-feedbacks-use-case';
import { PrismaFeedbackRepository } from './repositories/prisma/prisma-feedback-repository';
import { NodemailerMailAdapter } from './adapter/nodemailer/nodemailer-mail-adapter';
export const routes = express.Router();




routes.post('/feedbacks', async (req, res) => {
    const { type, comment, screenshot } = req.body;
    const prismaFeedbackRepository = new PrismaFeedbackRepository() 
    const nodemailerAdapter = new NodemailerMailAdapter()
    const submitFeedbackUseCase = new SubmitFeedbackUseCase(
        prismaFeedbackRepository,
        nodemailerAdapter,
    )
    await submitFeedbackUseCase.execute({
        type,
        comment,
        screenshot,
    });

    
    



    
    return res.status(201).send();
})