import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

/**
 * Retrieves all persons from the database.
 * @returns {Promise<Object[]>} A promise that resolves with an array of persons.
 */
const getAll = async () => {
    const request = axios.get(baseUrl);
    const response = await request;
    return response.data;
};


/**
 * Creates a new person in the database.
 * @param {Object} newPerson - The person to be created.
 * @returns {Promise<Object>} A promise that resolves with the created person.
 */
const create = async (newPerson) => {
    const request = axios.post(baseUrl, newPerson);
    const response = await request;
    return response.data;
}

/**
 * Removes a person from the database.
 * @param {number} id - The ID of the person to be removed.
 * @returns {Promise<Object>} A promise that resolves with the removed person.
 */
const remove = async (id) => {
    const request = axios.delete(`${baseUrl}/${id}`);
    const response = await request;
    return response.data;
}

/**
 * Updates a person in the database.
 * @param {number} id - The ID of the person to be updated.
 * @param {Object} updatedPerson - The updated person.
 * @returns {Promise<Object>} A promise that resolves with the updated person.
 */
const update = async (id, updatedPerson) => {
    const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
    const response = await request;
    return response.data;
}

export  default { getAll, create, remove, update};