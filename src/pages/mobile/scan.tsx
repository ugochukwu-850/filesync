import MobileViewLayout from "@/components/layout/mobile/MobileViewLayout";
import View from "@/components/View";
import {
  Format,
  checkPermissions,
  requestPermissions,
  scan,
} from "@tauri-apps/plugin-barcode-scanner";
export default function ScanPage() {
  return (
    <MobileViewLayout>
      <View>
        <button className="block" onClick={() => requestDevicePermission()}>
          checkPermissions{" "}
        </button>
      </View>
    </MobileViewLayout>
  );
}

const scanQrCode = () =>
  scan({ windowed: true, formats: [Format.QRCode] })
    .then((result) => {
      alert(result + " scan result");
    })
    .catch((err) => {
      alert(err.message);
    });

const checkDevicePermissionOrScan = () => {
  checkPermissions()
    .then((result) => {
      if (result == "granted") {
        requestDevicePermission();
        scanQrCode();
      }
      scanQrCode();
    })
    .catch((err) => {
      alert(err.message);
    });
};

const requestDevicePermission = () => {
  requestPermissions().then((permRequestResult) => {
    if (permRequestResult == "granted") {
      return;
    } else {
      alert("permission request fail " + permRequestResult);
    }
  }).catch((err)=>{
    alert(err.message)
  });
};