import React from "react";
import Head from "next/head";
import { Container, Nav, NavItem } from "reactstrap";
import Link from "next/link";

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>フードデリバリー</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css" />
      </Head>
      <header>
        <Nav className="navbar navbar-dark bg-dark px-5">
          <NavItem>
            <Link href="/" className="navbar-brand">
              <a>ホーム</a>
            </Link>
          </NavItem>
          <NavItem>
            <Link href="/login">
              <a className="navbar-link text-white ml-auto">サインイン</a>
            </Link>
            <Link href="/register">
              <a className="navbar-link text-white ml-auto">会員登録</a>
            </Link>
          </NavItem>
        </Nav>
      </header>
      <Container>{props.children}</Container>
    </div>
  );
};

export default Layout;
