export const addFullName = ({data}) => ({
  ...data,
  fullName: `${data.firstName} ${data.lastName}`,
});
