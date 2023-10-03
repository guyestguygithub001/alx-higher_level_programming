#include "lists.h"

/**
 * insert_node - It Inserts an int. into singly-linked list..
 * @head: for pointer the head of linked list..
 * @number: The int.. to insert..
 *
 * Return: If func. fails - NULL..
 * Otherwise - pointer for new node..
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *node = *head, *new;

	new = malloc(sizeof(listint_t));
	if (new == NULL)
		return (NULL);
	new->n = number;

	if (node == NULL || node->n >= number)
	{
		new->next = node;
		*head = new;
		return (new);
	}

	while (node && node->next && node->next->n < number)
		node = node->next;

	new->next = node->next;
	node->next = new;

	return (new);
