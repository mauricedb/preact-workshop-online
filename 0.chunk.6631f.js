webpackJsonp([0],{"32yg":function(e){e.exports={movies:"movies__2myFi"}},I8zr:function(e){e.exports={movieCard:"movieCard__jy7Ol",genreBadge:"genreBadge__1d5Jq"}},MZ9V:function(e,t,n){"use strict";function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function r(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}function i(e){if(null==e)throw new TypeError("Cannot destructure undefined")}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(t,"__esModule",{value:!0});var u=n("KM04"),f=n("32yg"),p=n.n(f),l=n("/QC5"),b=n("I8zr"),d=n.n(b),h=function(e){function t(){for(var t,n,r,i=arguments.length,s=Array(i),c=0;c<i;c++)s[c]=arguments[c];return t=n=o(this,e.call.apply(e,[this].concat(s))),n.element=null,r=t,o(n,r)}return r(t,e),t.prototype.componentDidMount=function(){this.props.observer.observe(this.element)},t.prototype.componentWillUnmount=function(){this.props.observer.unobserve(this.element)},t.prototype.render=function(e){var t=this,n=e.movie;return Object(u.h)("div",{class:["card",d.a.movieCard].join(" "),ref:function(e){return t.element=e},"data-id":n.id},Object(u.h)("img",{class:"card-img-top",src:n.isVisible?n.image:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8Xw8AAoMBgDTD2qgAAAAASUVORK5CYII=",alt:"Card image cap",height:"140"}),Object(u.h)("div",{class:"card-body"},Object(u.h)("h4",{class:"card-title"},n.title),Object(u.h)(l.Link,{href:"/movie/"+n.id},"Edit"),Object(u.h)("p",{class:"card-text"},n.overview)),Object(u.h)("div",{class:"card-footer text-cente"},n.genres.map(function(e){return Object(u.h)("span",{class:["badge","badge-pill","badge-info",d.a.genreBadge].join(" ")},e)})))},t}(u.Component),v=Object(u.h)("h2",null,"Movies"),m=function(e){var t=e.movies,n=e.observer;return Object(u.h)("div",{class:p.a.movies},v,Object(u.h)("div",{class:"card-deck"},t.map(function(e){return Object(u.h)(h,{movie:e,observer:n})})))},y=function(e){function t(){s(this,t);var n=c(this,e.call(this));return n.state={movies:[]},n.onIntersection=function(e){var t=n.state.movies;e.forEach(function(e){var n=+e.target.dataset.id,o=t.find(function(e){return e.id===n});o&&(o.isVisible=o.isVisible||e.isIntersecting)}),n.setState({movies:t})},n.observer=new IntersectionObserver(n.onIntersection),n.observer.POLL_INTERVAL=100,n}return a(t,e),t.prototype.componentDidMount=function(){var e=this;fetch("/api/movies.json").then(function(e){return e.json()}).then(function(t){return e.setState({movies:t})})},t.prototype.render=function(e,t){var n=t.movies;return i(e),Object(u.h)(m,{movies:n,observer:this.observer})},t}(u.Component);n.d(t,"default",function(){return y})}});
//# sourceMappingURL=0.chunk.6631f.js.map