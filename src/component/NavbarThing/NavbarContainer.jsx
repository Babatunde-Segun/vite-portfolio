import { useContext } from "react";
import { Box, IconButton, useTheme } from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";

// import LightModeOutlinedIcon from "@mui/material/Icons-material/LightModeOutlinedIcon";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";

function Navbar() {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  return (
    <Box>
      <IconButton onClick={colorMode.toggleColorMode}>
        {theme.palette.mode === "dark" ? (
          <DarkModeOutlinedIcon />
        ) : (
          <LightModeOutlinedIcon
            style={{
              fill: `${colors.blueAccent}`,
            }}
          />
        )}
      </IconButton>
    </Box>
  );
}

export default Navbar;

// import React from "react";
// import {
//   Navbar,
//   NavbarBrand,
//   NavbarContent,
//   NavbarItem,
//   Link,
//   Button,
// } from "@nextui-org/react";
// // import { AcmeLogo } from "./AcmeLogo.jsx";

// export default function App() {
//   return (
//     <Navbar
//       style={{
//         background: "transparent",
//         color: "white",
//       }}
//       classNames={{
//         item: [
//           "flex",
//           "relative",
//           "h-full",
//           "items-center",
//           "data-[active=true]:after:content-['']",
//           "data-[active=true]:after:absolute",
//           "data-[active=true]:after:bottom-0",
//           "data-[active=true]:after:left-0",
//           "data-[active=true]:after:right-0",
//           "data-[active=true]:after:h-[2px]",
//           "data-[active=true]:after:rounded-[2px]",
//           "data-[active=true]:after:bg-primary",
//         ],
//       }}
//     >
//       <NavbarContent
//         className=" sm:flex gap-4 justify-center"
//         justify="space-around"
//       >
//         <NavbarItem>
//           <Link href="#">Home</Link>
//         </NavbarItem>
//         <NavbarItem isActive>
//           <Link href="#" aria-current="page">
//             Portfolio
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="white" href="#">
//             About Me
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="white" href="#">
//             Resume
//           </Link>
//         </NavbarItem>
//         <NavbarItem>
//           <Link color="white" href="#">
//             Contact
//           </Link>
//         </NavbarItem>
//       </NavbarContent>
//       <NavbarContent justify="end">
//         <NavbarItem>
//           <Button as={Link} color="primary" href="#" variant="flat">
//             Sign Up
//           </Button>
//         </NavbarItem>
//       </NavbarContent>
//     </Navbar>
//   );
// }
