const prod = {
   API_URL: 'production url' 
   
};

const dev = {
   API_URL: 'http://localhost:3000/'
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;
