function Deposit() {
    const [deposit, setDeposit] = React.useState("");
    const [balance, setBalance] = React.useState(0);
    const [show, setShow] = React.useState(true);
    const [status, setStatus] = React.useState("");
    const ctx = React.useContext(UserContext);
    let userBalance = ctx.users[ctx.users.length - 1].balance;
    let userName = ctx.users[ctx.users.length - 1].name;

function validate(number) {
     if (isNaN(number) || number < 0) {
        setStatus("Transaction Failed. Please enter a valid amount.");
        setTimeout(() => setStatus(""), 5000);
        return false;
    }
    return true;
    }

function handleDeposit (amount) {
    if (!validate(amount)) return;
    setBalance(userBalance + amount);
    setStatus("");
ctx.users[ctx.users.length - 1].balance += Number(amount);
setShow(false);
}

function clearForm() {
    setDeposit("");
    setShow(true);
}

    return (
        <Card
        bgcolor="primary"
        header="Deposit"
        status={status}
        body={show ? (
           <>
           <h5>Welcome, {userName}!</h5>
           <br />
           <h4>Current Balance: $ {userBalance}</h4>
           <br />
           <div>
                <input type="input" className="form-control" id="number" placeholder="Enter Deposit Amount" value={deposit} onChange={(e) => setDeposit(e.currentTarget.value)}/><br/>
                <button type="submit" className="btn btn-light"  disabled={deposit === ""}
              onClick={() => handleDeposit(deposit)}>Deposit</button>
            </div>
            </>
        ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="btn btn-light" onClick={clearForm}>Make Your Deposit</button>
            </>
        )
    }
    />
     );
}