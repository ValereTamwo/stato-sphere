import React, { useState } from 'react';

const FieldAdder = ({ onAddField }) => {
  const [fieldType, setFieldType] = useState('text');
  const [label, setLabel] = useState('');
  const [options, setOptions] = useState(['']); // Pour le champ select, checkbox et radio

  const handleAddField = () => {
    if (label.trim() === '') {
      alert("Veuillez entrer un libellé pour le champ.");
      return;
    }

    const newField = {
      type: fieldType,
      label,
      required:true,
      options: fieldType === 'text' ? [] : options.filter(option => option.trim() !== ''),
    };

    onAddField(newField);

    // Réinitialiser les valeurs
    setFieldType('text');
    setLabel('');
    setOptions(['']);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleRemoveOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  return (
    <div>
      <h3></h3>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type de champ:</label>
      <select value={fieldType} onChange={(e) => setFieldType(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white">
        <option  value="text">Texte</option>
        <option value="select">Sélection</option>
        <option value="checkbox">Cases à cocher</option>
        <option value="radio">Boutons radio</option>
        <option value="textarea">Zone de texte</option>
        <option value="date">Date</option>
        <option value="number">Nombre</option>
        <option value="email">Email</option>
        <option value="tel">Téléphone</option>
        <option value="time">heure</option>
      </select>
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white" >Libellé:</label>
      <input required  type="text" value={label} onChange={(e) => setLabel(e.target.value)}  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"/>
      {fieldType === 'select' || fieldType === 'checkbox' || fieldType === 'radio' ? (
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Options:</label>
          {options.map((option, index) => (
            <div key={index}>
              <input
                required
                className="mt-1 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                type="text"
                value={option}
                onChange={(e) => {
                  const newOptions = [...options];
                  newOptions[index] = e.target.value;
                  setOptions(newOptions);
                }}
              />
              {options.length > 1 && (
                <button className="mt-2 text-white bg-red-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={() => handleRemoveOption(index)}>Supprimer</button>
              )}
            </div>
          ))}
          <button className=" mt-4 text-white bg-orange-700 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" onClick={handleAddOption}>Ajouter une option</button>
        </div>
      ) : null}
      <button onClick={handleAddField} className="w-full mt-3 text-white bg-black hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Ajouter</button>
    </div>
  );
};

export default FieldAdder;
