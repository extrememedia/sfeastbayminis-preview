self.__MIDDLEWARE_MATCHERS = [
  {
    "regexp": "^\\/sfeastbayminis-preview(?:\\/(_next\\/data\\/[^/]{1,}))?\\/api(?:\\/((?:[^\\/#\\?]+?)(?:\\/(?:[^\\/#\\?]+?))*))?(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/api/:path*"
  },
  {
    "regexp": "^\\/sfeastbayminis-preview(?:\\/(_next\\/data\\/[^/]{1,}))?(?:\\/((?!admin|api|_next|wp-content|wp-json|feed|fonts|media|favicon\\.ico|icon|apple-icon|robots\\.txt|sitemap\\.xml|sitemap_index\\.xml|page-sitemap\\.xml|post-sitemap\\.xml|manifest\\.webmanifest|.*\\.[A-Za-z0-9]{2,5}$).*))(\\.json|\\.rsc|\\.segments\\/.+\\.segment\\.rsc)?[\\/#\\?]?$",
    "originalSource": "/((?!admin|api|_next|wp-content|wp-json|feed|fonts|media|favicon\\.ico|icon|apple-icon|robots\\.txt|sitemap\\.xml|sitemap_index\\.xml|page-sitemap\\.xml|post-sitemap\\.xml|manifest\\.webmanifest|.*\\.[A-Za-z0-9]{2,5}$).*)"
  }
];self.__MIDDLEWARE_MATCHERS_CB && self.__MIDDLEWARE_MATCHERS_CB()