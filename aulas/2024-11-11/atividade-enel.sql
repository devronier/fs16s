CREATE TABLE clientes (
    cliente_id INTEGER PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    cpf VARCHAR(14) UNIQUE NOT NULL,
    tipo_cliente VARCHAR(20) NOT NULL CHECK (
        tipo_cliente IN ('Residencial', 'Comercial', 'Industrial')
    ),
    data_cadastro DATE NOT NULL
);

CREATE TABLE medidores (
    medidor_id INTEGER PRIMARY KEY,
    cliente_id INTEGER NOT NULL,
    numero_serie VARCHAR(20) UNIQUE NOT NULL,
    endereco VARCHAR(255) NOT NULL,
    data_instalacao DATE NOT NULL,
    status VARCHAR(20) NOT NULL CHECK (status IN ('Ativo', 'Inativo', 'Manutenção')),
    FOREIGN KEY (cliente_id) REFERENCES Clientes(cliente_id)
);

CREATE TABLE leituras (
    leitura_id INTEGER PRIMARY KEY,
    medidor_id INTEGER NOT NULL,
    mes INTEGER NOT NULL CHECK (
        mes BETWEEN 1
        AND 12
    ),
    ano INTEGER NOT NULL,
    consumo_kwh DECIMAL(10, 2) NOT NULL,
    FOREIGN KEY (medidor_id) REFERENCES Medidores(medidor_id),
    UNIQUE (medidor_id, mes, ano)
);