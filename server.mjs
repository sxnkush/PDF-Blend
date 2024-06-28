import express from 'express';
import path from 'path';
import multer from 'multer';
import { mergePDFs } from './testpdf.mjs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const app = express();
const upload = multer({ dest: 'uploads/' });

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.use('/static', express.static('public'));

const port = 3000;

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "templates", "index.html"));
});

app.post('/merge', upload.array('pdfs', 10), async (req, res, next) => {
    console.log(req.files);
     let d = await mergePDFs(path.join(__dirname, req.files[0].path), path.join(__dirname, req.files[1].path));

    res.redirect(`http://localhost:${port}/static/${d}.pdf`);
});

app.listen(port, () => {
    console.log(`App listening on port http://localhost:${port}`);
});
