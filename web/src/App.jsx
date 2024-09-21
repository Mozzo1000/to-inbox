import { Button, Textarea, Drawer} from "flowbite-react";
import { useRef, useState } from "react";
import { FaMicrophone } from "react-icons/fa";
import { FaImage } from "react-icons/fa";
import useToast from './toast/useToast';
import ToastContainer from './toast/Container';
import { FaGear } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";

function App() {
  const [noteContent, setNoteContent] = useState();
  const hiddenFileInput = useRef(null);
  const [filesToUpload, setFilesToUpload] = useState();
  const [settingsDrawer, setSettingsDrawer] = useState(false);

  const toast = useToast(4000);

  const handleGalleryClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleGalleryChange = event => {
    const fileUploaded = event.target.files;
    setFilesToUpload(event.target.files);
    console.log(fileUploaded)
  };

  return (
    <>
    <div className="pt-2 mb-4 flex flex-row justify-between items-center">
      <h1 className="text-3xl font-extrabold leading-none tracking-tight text-gray-900 md:text-4xl lg:text-5xl dark:text-white">To Inbox</h1>
      <Button outline color="light" pill onClick={() => setSettingsDrawer(!settingsDrawer)} ><FaGear className="h-5 w-5"/></Button>
    </div>

    <Textarea rows={8} required autoFocus placeholder="Write your message" value={noteContent} onChange={(e) => setNoteContent(e.target.value)}/>
      <Button.Group className="flex flex-row">
        <Button disabled color="gray" className="basis-1/5"><FaMicrophone className="h-5 w-5" /></Button>
        <Button color="gray" className="basis-1/5" onClick={handleGalleryClick}>
          <FaImage className="h-5 w-5" />
          <input style={{display: 'none'}} onChange={handleGalleryChange} ref={hiddenFileInput} type="file" accept="image/png, image/gif, image/jpeg" multiple/>
          {filesToUpload?.length > 0 &&
            <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-red-500 border-2 border-white rounded-full -top-2 -end-2 z-10 dark:border-gray-900">{filesToUpload.length}</div>
          }
        </Button>
        <Button className="basis-full" onClick={() => toast("message_sent", "Message sent successfully.")}><FaTelegramPlane className="mr-2 h-5 w-5"/>Send</Button>
      </Button.Group>

      <Drawer open={settingsDrawer} onClose={() => setSettingsDrawer(!settingsDrawer)} position="right">
        <Drawer.Header title="Settings" titleIcon={() => <FaGear className="mr-2 "/>} />
        <Drawer.Items>
          
        </Drawer.Items>
      </Drawer>

      <ToastContainer />
    </>
  )
}

export default App
