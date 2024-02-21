import { useState } from 'react';
import styles from './SelectService.module.css';
export const SelectService = () => {
    // Estado para armazenar as escolhas do usuário
    const [selectedOptions, setSelectedOptions] = useState([]);

    // Opções disponíveis no select
    const options = [
        { value: 'opcao1', label: 'Opção 1' },
        { value: 'opcao2', label: 'Opção 2' },
        { value: 'opcao3', label: 'Opção 3' },
        // Adicione mais opções conforme necessário
    ];

    // Função para lidar com a seleção/deseleção de opções
    const handleOptionChange = (event) => {
        const { value } = event.target;
        if (selectedOptions.includes(value)) {
            // Remove a opção se já estiver selecionada
            setSelectedOptions(selectedOptions.filter((option) => option !== value));
        } else {
            // Adiciona a opção se ainda não estiver selecionada
            setSelectedOptions([...selectedOptions, value]);
        }
    };

    return (
        <div>
            <label>Escolha uma ou mais opções:</label>
            <select
                className={styles.list_services}
                multiple
                value={selectedOptions}
                onChange={handleOptionChange}
            >
                {options.map((option, index) => (
                    <option key={index} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            <p>Opções selecionadas: {selectedOptions.join(', ')}</p>
        </div>
    );
};
