create table eventos
(
    id              serial
        primary key,
    nome            varchar(255) not null,
    data_realizacao date         not null,
    descricao       text,
    numero_vagas    integer      not null,
    valor_inscricao numeric(10, 2)
);

create table participantes
(
    id            serial
        primary key,
    nome          varchar(255) not null,
    email         varchar(255) not null
        unique,
    data_cadastro date         not null
);

create table inscricoes
(
    id              serial
        primary key,
    participante_id integer not null
        constraint fk_participante
            references participantes,
    evento_id       integer not null
        constraint fk_evento
            references eventos,
    data_inscricao  date    not null,
    constraint unique_participante_evento
        unique (participante_id, evento_id)
);

create table pagamentos
(
    id               serial
        primary key,
    inscricao_id     integer     not null
        constraint fk_inscricao
            references inscricoes,
    data_pagamento   date        not null,
    status           varchar(20) default 'pendente'::character varying,
    metodo_pagamento varchar(20) not null,
    desconto         numeric(5, 2)
);