import multer from 'multer';
import path from 'path';

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadDir = path.join(process.cwd(), 'public/uploads');
    console.log('Destination:', uploadDir); 
    cb(null, uploadDir); 
  },
  filename: function (req, file, cb) {
    const ext = path.extname(file.originalname);
    const filename = `${Date.now()}${ext}`;
    console.log('Filename:', filename); 
    cb(null, filename); 
  },
});

const upload = multer({ storage: storage });

export default async function handler(req, res) {
  if (req.method === 'POST') {
    upload.single('myfile')(req, res, async (err) => {
      if (err) {
        console.error('Error:', err); 
        return res.status(500).json({ error: 'Error al subir la imagen.' });
      }

      console.log('File uploaded:', req.file); 

      const imageUrl = `/uploads/${req.file.filename}`;
      console.log('Image URL:', imageUrl); 
      res.status(200).json({ imageUrl });
    });
  } else {
    res.status(405).end(); 
  }
}
