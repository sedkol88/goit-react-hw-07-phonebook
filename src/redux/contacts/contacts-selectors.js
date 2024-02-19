import { createSelector } from '@reduxjs/toolkit';

export const selectAllContacts = store => store.contacts.items;

export const selectFavoriteContacts = createSelector(
  [selectAllContacts],
  contacts => contacts.filter(({ favorite }) => favorite)
);

export const selectContacts = state => state.contacts;

export const selectFilteredContacts = store => {
  const { contacts, filter } = store;
  const { items } = contacts;
  if (!filter) {
    return items;
  }

  const normalizedFilter = filter.toLowerCase();

  const filteredContacts = items.filter(({ name, phone }) => {
    const normalizedName = name.toLowerCase();
    const normalizedPhone = phone.toLowerCase();

    return (
      normalizedPhone.includes(normalizedFilter) ||
      normalizedName.includes(normalizedFilter)
    );
  });

  return filteredContacts;
};
