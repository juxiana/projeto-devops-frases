CREATE TABLE frases (
    id SERIAL PRIMARY KEY,
    texto VARCHAR(255) NOT NULL
);

INSERT INTO frases (texto) VALUES 
('A persistência realiza o impossível.'),
('Tá difícil? Imagina explicar seu código pro professor'),
('Se não tá dando erro, você fez errado.'),
('DevOps não é apenas uma ferramenta, é uma cultura!'),
('O diploma tá mais perto do que sua sanidade, mas tá chegando!'),
('Último período: onde você já não aprende mais… só sobrevive'),
('Se entregar meia boca dá pra passar? Então tá ótimo.');