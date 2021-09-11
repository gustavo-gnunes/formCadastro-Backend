import { createConnection } from 'typeorm'

// procura em todo o projeto uma pasta chamada orconfin.json
// qdo encontrar, ele lê o que está lá dentro e faz a conexão com o BD
createConnection();
