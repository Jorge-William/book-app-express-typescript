import express, { Request, Response } from 'express';
import "reflect-metadata"

const app = express()

const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})