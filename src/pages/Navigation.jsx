"use client";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import {
  BackupTable as BackupTableIcon,
  KeyboardArrowDown as KeyboardArrowDownIcon,
  Create as CreateIcon,
  Percent as PercentIcon,
  Gamepad as GamepadIcon,
} from "@mui/icons-material";
import {
  Box,
  Menu,
  MenuItem,
  Toolbar,
  Tooltip,
  Typography,
} from "@mui/material";

const Navigation = () => {
  const [anchorTable, setAnchorTable] = useState(null);
  const [anchorForms, setAnchorForms] = useState(null);
  const [anchorCard, setAnchorCard] = useState(null);
  const [anchorButton, setAnchorButton] = useState(null);

  //Tables
  const handleOpenTableMenu = (event) => {
    setAnchorTable(event.currentTarget);
  };
  const handleCloseTableMenu = () => {
    setAnchorTable(null);
  };
  //Forms
  const handleOpenFormsMenu = (event) => {
    setAnchorForms(event.currentTarget);
  };
  const handleCloseFormsMenu = () => {
    setAnchorForms(null);
  };
  //Cards
  const handleOpenCardMenu = (event) => {
    setAnchorCard(event.currentTarget);
  };
  const handleCloseCardMenu = () => {
    setAnchorCard(null);
  };
  //Buttons
  const handleOpenButtonMenu = (event) => {
    setAnchorButton(event.currentTarget);
  };
  const handleCloseButtonMenu = () => {
    setAnchorButton(null);
  };

  const navigation = [
    {
      name: "Dashboard",
      link: "/",
      sublinks: [],
      open: null,
      close: null,
      anchor: null,
    },
    {
      name: "Tables",
      link: "/table",
      sublinks: [
        {
          name: "MUI DataGrid",
          link: "/table/mui-datagrid",
          icon: <BackupTableIcon />,
        },
      ],
      open: handleOpenTableMenu,
      close: handleCloseTableMenu,
      anchor: anchorTable,
    },
    {
      name: "Forms",
      link: "/form",
      sublinks: [
        {
          name: "Textfield Forms",
          link: "/form/textfield",
          icon: <CreateIcon />,
        },
      ],
      open: handleOpenFormsMenu,
      close: handleCloseFormsMenu,
      anchor: anchorForms,
    },
    {
      name: "Cards",
      link: "/card",
      sublinks: [
        {
          name: "Card with percent",
          link: "/card/percent",
          icon: <PercentIcon />,
        },
      ],
      open: handleOpenCardMenu,
      close: handleCloseCardMenu,
      anchor: anchorCard,
    },
    {
      name: "Button",
      link: "/button",
      sublinks: [
        {
          name: "Pushable Buttons",
          link: "/button/pushable",
          icon: <GamepadIcon />,
        },
      ],
      open: handleOpenButtonMenu,
      close: handleCloseButtonMenu,
      anchor: anchorButton,
    },
  ];

  return (
    <div className="h-screen flex flex-col ">
      <div className="navbar-container bg-primary py-2 flex justify-center items-center z-10 shadow-[5px_5px_rgba(0,_98,_90,_0.4),_10px_10px_rgba(0,_98,_90,_0.3),_15px_15px_rgba(0,_98,_90,_0.2),_20px_20px_rgba(0,_98,_90,_0.1),_25px_25px_rgba(0,_98,_90,_0.05)]">
        <div className="w-[95%] font-['Poppins'] text-white ">
          <Toolbar disableGutters>
            <div className="absolute left-0 flex flex-col">
              <Typography
                variant="h6"
                noWrap
                component="a"
                href="/dashboard"
                sx={{
                  // position: "absolute",
                  // left: 0,
                  fontWeight: 800,
                  letterSpacing: ".3rem",
                  color: "white",
                  textDecoration: "none",
                }}
              >
                COLLECTION
              </Typography>
              <p className="self-end text-xs italic">by Dom</p>
            </div>

            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex" },
                gap: "35px",
                margin: "0 50px",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {navigation &&
                navigation.map((page, index) => (
                  <div
                    key={index}
                    className="text-xl flex text-white justify-center items-center font-bold"
                  >
                    {page.sublinks.length > 0 ? (
                      <Box
                        sx={{
                          flexGrow: 0,
                          cursor: "pointer",
                          borderRadius: "6px",
                        }}
                      >
                        <Tooltip>
                          <div
                            className="flex justify-center items-center gap-1 text-xl px-2 py-1 rounded-md transition ease-in-out"
                            onClick={page.open}
                          >
                            <p className="font-semibold select-none">
                              {page.name}
                            </p>
                            <div
                              className={`transition-transform duration-300 ease-in-out ${
                                page.anchor ? "rotate-180" : ""
                              }`}
                            >
                              <KeyboardArrowDownIcon
                                style={{ fontSize: "1.2rem" }}
                              />
                            </div>
                          </div>
                        </Tooltip>
                        <Menu
                          sx={{ mt: "45px" }}
                          id="menu-appbar"
                          anchorEl={page.anchor}
                          anchorOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          keepMounted
                          transformOrigin={{
                            vertical: "top",
                            horizontal: "center",
                          }}
                          open={Boolean(page.anchor)}
                          onClose={page.close}
                        >
                          {page.sublinks.map((item, subIndex) => (
                            <MenuItem key={subIndex} onClick={page.close}>
                              <Link to={item.link} className="text-xl w-full">
                                <div className="flex justify-center items-center gap-4 font-['Poppins'] w-full">
                                  {item.icon}
                                  <div className="text-base flex flex-col justify-start items-start font-semibold">
                                    {item.name}
                                    <p className="text-xs text-gray-500 font-light">
                                      {item.name}
                                    </p>
                                  </div>
                                </div>
                              </Link>
                            </MenuItem>
                          ))}
                        </Menu>
                      </Box>
                    ) : (
                      <Link className="font-semibold" to={page.link}>
                        {page.name}
                      </Link>
                    )}
                  </div>
                ))}
            </Box>
          </Toolbar>
        </div>
      </div>
      <div className="outlet-container flex-1 bg-secondary">
        <Outlet />
      </div>
    </div>
  );
};

export default Navigation;
