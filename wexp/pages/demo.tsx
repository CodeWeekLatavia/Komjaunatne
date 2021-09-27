import { VFC } from 'react'
import Loading from '../components/Loading'
import { AuthAction, withAuthUser } from 'next-firebase-auth'

type DemoDataType = {
  name: string
}

const MyLoader = () => <div>Loading...</div>

const Demo: VFC<DemoDataType> = ({ name }) => {
  return <div>Hello {name}!</div>
}

/*Here's an example of a login page that shows a loader until Firebase is initialized, then redirects to the app if the user is already logged in:*/
export default withAuthUser<DemoDataType>({ // <--- Ensure that the type is provided
  whenAuthed: AuthAction.REDIRECT_TO_APP,
  whenUnauthedBeforeInit: AuthAction.SHOW_LOADER,
  whenUnauthedAfterInit: AuthAction.RENDER,
  LoaderComponent: MyLoader,
})(Demo)