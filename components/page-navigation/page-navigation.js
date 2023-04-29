import {
  NavigationContainer,
  NavigationItem,
  MXAuto,
  Previous,
  Next,
} from "./page-navigation.styles";

const PageNavigation = (props) => {
  var currentPage = props.currentPage;
  var pages = props.pages;
  var showPagination = props.showPagination;
  const changePage = (page) => {
    props.setCurrentPage(page);
  };

  const getNavItem = (pages) => {
    let navItems = [];
    for (let i = 0; i < pages; i++) {
      const pageNumber = i + 1;
      let activeClass = "";
      if (currentPage === pageNumber) activeClass = "active";
      navItems.push(
        <span key={i}>
          <NavigationItem
            activeClass={activeClass}
            onClick={() => {
              changePage(pageNumber);
            }}
          >
            {pageNumber}
          </NavigationItem>
        </span>
      );
    }
    return navItems;
  };

  return (
    <>
      {pages > 0 && (
        <NavigationContainer>
          <Previous
            show={currentPage !== 1 ? true : false}
            onClick={() => changePage(currentPage - 1)}
          >
            Prev
          </Previous>
          {showPagination && <MXAuto>{getNavItem(pages)}</MXAuto>}
          <Next
            show={currentPage !== pages ? true : false}
            onClick={() => changePage(currentPage + 1)}
          >
            Next
          </Next>
        </NavigationContainer>
      )}
    </>
  );
};
export default PageNavigation;
