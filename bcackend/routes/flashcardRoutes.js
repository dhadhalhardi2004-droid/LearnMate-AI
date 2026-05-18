import express from 'express';
import { getFlashcards,
     getAllFlashcardSets,
      reviewFlashcard,
       toggleStarFlashcard,
        deleteFlashcardSet } 
        from '../controllers/flashcardController.js';
        import protect from '../middleware/auth.js';

const router = express.Router();
router.use(protect);
router.get('/', getFlashcardSets);
router.get('/:documentId', getFlashcards);
router.post('/:cardId/review', reviewFlashcard);
router.post('/:cardId/star', toggleStarFlashcard);
router.delete('/:Id', deleteFlashcardSet);

export default router;