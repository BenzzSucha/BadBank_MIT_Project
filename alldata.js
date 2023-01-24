function AllData() {
    const ctx = React.useContext(UserContext);
    const displayUsers = ctx.users.map((user) => {
      return (
        <tr key={user}>
          <td>{user.name}</td>
          <td>{user.email}</td>
          <td>{user.password}</td>
          <td>{user.balance}</td>
        </tr>
      );
    });
  
    return (
      <Card
        bgcolor="primary"
        header="All Data"
        body={
          <table className="table">
            <thead className="thead-info">
              <tr className="table-primary">
                <th>Name</th>
                <th>Email</th>
                <th>Password</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>{displayUsers}</tbody>
          </table>
        }
      />
    );
  }
  
  export default AllData;