import Navigation from "../components/navigation";
import SignUpLayout from "../layouts/signuplayout";

export default function SignIn(props){


//TODO on Sep 17th
// Get Form setup
// Get FieldSet setup
// Get two inputs and one button setup
// Get inputs flowing into setState functions
// onSubmit, call Firebase singinwithemailandpassword and get auth object -> have it go to useContext
// In dashboard use the auth object(see dashboard.jsx after this)

return(

    <div className="font-bold">
        <Navigation />

    </div>
)

}

SignIn.PageLayout = SignUpLayout