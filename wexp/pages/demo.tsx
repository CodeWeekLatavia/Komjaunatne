import { AuthAction, withAuthUser } from 'next-firebase-auth'

const MyLoader = () => <div>Loading...</div>

const Demo = ({ name }) => {
  return <div>Hello {name}!</div>
}

export default withAuthUser({ // <--- Ensure that the type is provided
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(Demo)