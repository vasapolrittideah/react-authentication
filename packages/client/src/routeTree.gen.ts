/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

import { createFileRoute } from '@tanstack/react-router';

// Import Routes

import { Route as rootRoute } from './routes/__root';

// Create Virtual Routes

const SignUpLazyImport = createFileRoute('/sign-up')();
const LoginLazyImport = createFileRoute('/login')();
const AboutLazyImport = createFileRoute('/about')();
const IndexLazyImport = createFileRoute('/')();

// Create/Update Routes

const SignUpLazyRoute = SignUpLazyImport.update({
  id: '/sign-up',
  path: '/sign-up',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/sign-up.lazy').then((d) => d.Route));

const LoginLazyRoute = LoginLazyImport.update({
  id: '/login',
  path: '/login',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/login.lazy').then((d) => d.Route));

const AboutLazyRoute = AboutLazyImport.update({
  id: '/about',
  path: '/about',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/about.lazy').then((d) => d.Route));

const IndexLazyRoute = IndexLazyImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route));

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/';
      path: '/';
      fullPath: '/';
      preLoaderRoute: typeof IndexLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/about': {
      id: '/about';
      path: '/about';
      fullPath: '/about';
      preLoaderRoute: typeof AboutLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/login': {
      id: '/login';
      path: '/login';
      fullPath: '/login';
      preLoaderRoute: typeof LoginLazyImport;
      parentRoute: typeof rootRoute;
    };
    '/sign-up': {
      id: '/sign-up';
      path: '/sign-up';
      fullPath: '/sign-up';
      preLoaderRoute: typeof SignUpLazyImport;
      parentRoute: typeof rootRoute;
    };
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof IndexLazyRoute;
  '/about': typeof AboutLazyRoute;
  '/login': typeof LoginLazyRoute;
  '/sign-up': typeof SignUpLazyRoute;
}

export interface FileRoutesByTo {
  '/': typeof IndexLazyRoute;
  '/about': typeof AboutLazyRoute;
  '/login': typeof LoginLazyRoute;
  '/sign-up': typeof SignUpLazyRoute;
}

export interface FileRoutesById {
  __root__: typeof rootRoute;
  '/': typeof IndexLazyRoute;
  '/about': typeof AboutLazyRoute;
  '/login': typeof LoginLazyRoute;
  '/sign-up': typeof SignUpLazyRoute;
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath;
  fullPaths: '/' | '/about' | '/login' | '/sign-up';
  fileRoutesByTo: FileRoutesByTo;
  to: '/' | '/about' | '/login' | '/sign-up';
  id: '__root__' | '/' | '/about' | '/login' | '/sign-up';
  fileRoutesById: FileRoutesById;
}

export interface RootRouteChildren {
  IndexLazyRoute: typeof IndexLazyRoute;
  AboutLazyRoute: typeof AboutLazyRoute;
  LoginLazyRoute: typeof LoginLazyRoute;
  SignUpLazyRoute: typeof SignUpLazyRoute;
}

const rootRouteChildren: RootRouteChildren = {
  IndexLazyRoute: IndexLazyRoute,
  AboutLazyRoute: AboutLazyRoute,
  LoginLazyRoute: LoginLazyRoute,
  SignUpLazyRoute: SignUpLazyRoute,
};

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>();

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/login",
        "/sign-up"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/about": {
      "filePath": "about.lazy.tsx"
    },
    "/login": {
      "filePath": "login.lazy.tsx"
    },
    "/sign-up": {
      "filePath": "sign-up.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */