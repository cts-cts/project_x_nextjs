interface Props {
  params: { username: string };
  searchParams: {
    limit: string;
    skip: string;
  };
}

const UserDetailsPage = ({
  params: { username },
  searchParams: { limit, skip },
}: Props) => {
  return (
    <h1>
      Users {username} {limit} {skip}
    </h1>
  );
};

export default UserDetailsPage;
