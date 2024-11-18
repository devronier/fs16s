# Atividades com Manipulação de Dados (INSERT, UPDATE, DELETE)

## **Atividades com INSERT**

1. Inserir um novo cliente na tabela `clientes` como tipo "Residencial".

2. Inserir um cliente comercial com data de cadastro em 2023.

3. Adicionar um novo medidor associado ao cliente 11.

4. Registrar leituras para o medidor 11 nos meses de janeiro e fevereiro de 2024.

5. Adicionar um cliente industrial cadastrado em 2022.

6. Registrar um novo medidor em manutenção para o cliente 13.

7. Registrar três leituras para o novo medidor do cliente 13.

8. Adicionar um cliente sem CPF (teste de erro por constraint).  
   - **Resultado esperado**: erro devido à restrição `NOT NULL`.

9. Inserir um medidor duplicado (teste de erro por `UNIQUE`).  
   - **Resultado esperado**: erro devido à restrição de número de série único.

10. Adicionar um cliente com tipo inválido (teste de erro por `CHECK`).  
    - **Resultado esperado**: erro devido à restrição de tipo de cliente.

---

## **Atividades com UPDATE**

11. Atualizar o tipo do cliente 1 de "Residencial" para "Comercial".

12. Mudar o status do medidor 4 para "Ativo".

13. Alterar o endereço do medidor 2 para "Rua Nova, 200".

14. Atualizar o CPF do cliente 6 para "987.654.321-77".

15. Atualizar o consumo de março de 2023 do medidor 1 para 350 kWh.

16. Modificar o status de todos os medidores de "Inativo" para "Ativo".

17. Aumentar o consumo em 10% para todas as leituras do ano de 2023.

18. Alterar a data de cadastro do cliente 3 para "2023-05-01".

19. Atualizar o tipo de todos os clientes industriais para "Comercial".

20. Corrigir o número de série do medidor 7 para "CE-2021-0003".

---

# Atividades com Funções Agregadas

## **Funções Agregadas (COUNT, SUM, AVG, MIN, MAX)**

21. Contar o número total de clientes cadastrados.

22. Contar o número de medidores em manutenção.

23. Calcular o consumo total de energia registrado em 2023.

24. Calcular o consumo médio de energia dos medidores ativos.

25. Encontrar o maior consumo registrado em 2023.

26. Determinar o menor consumo registrado no mês de janeiro de 2023.

27. Listar o número total de leituras registradas por medidor.

28. Calcular o consumo médio anual de cada cliente.

29. Encontrar o total de consumo de energia dos clientes do tipo "Residencial".

30. Identificar o maior consumo registrado por um único medidor no ano de 2023.
