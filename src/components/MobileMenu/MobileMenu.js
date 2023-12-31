/* eslint-disable no-unused-vars */
import React from "react";
import styled from "styled-components/macro";
import * as Dialog from "@radix-ui/react-dialog";

import UnstyledButton from "../UnstyledButton";
import Icon from "../Icon";
import VisuallyHidden from "../VisuallyHidden";

const MobileMenu = () => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <UnstyledButton>
          <Icon id="menu" strokeWidth={2} size={24} />
          <VisuallyHidden>Open Menu</VisuallyHidden>
        </UnstyledButton>
      </Dialog.Trigger>
      <Dialog.Portal>
        <DialogOverlay />
        <DialogContent>
          <DialogClose asChild>
            <UnstyledButton aria-label="Close">
              <Icon id="close" strokeWidth={2} size={24} />
              <VisuallyHidden>Close Menu</VisuallyHidden>
            </UnstyledButton>
          </DialogClose>
          <Nav>
            <NavLink href="/sale">Sale</NavLink>
            <NavLink href="/new">New&nbsp;Releases</NavLink>
            <NavLink href="/men">Men</NavLink>
            <NavLink href="/women">Women</NavLink>
            <NavLink href="/kids">Kids</NavLink>
            <NavLink href="/collections">Collections</NavLink>
          </Nav>

          <Footer>
            <FooterLink href="/terms">Terms and Conditions</FooterLink>
            <FooterLink href="/privacy">Privacy Policy</FooterLink>
            <FooterLink href="/contact">Contact Us</FooterLink>
          </Footer>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

const DialogOverlay = styled(Dialog.Overlay)`
  position: fixed;
  inset: 0;
  opacity: 0.8;
  background: var(--color-gray-700);
`;

const DialogContent = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: min(${350 / 16}rem, 80%);
  height: 100%;
  padding: 32px;

  background-color: white;
`;

const DialogClose = styled(Dialog.Close)`
  align-self: flex-end;
`;

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const Footer = styled.footer`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);
  font-size: ${18 / 16}rem;
  line-height: ${21.13 / 16}rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: var(--color-gray-700);
  font-weight: var(--font-weight-normal);
  font-size: ${14 / 16}rem;
  line-height: ${16.44 / 16}rem;
`;

export default MobileMenu;
