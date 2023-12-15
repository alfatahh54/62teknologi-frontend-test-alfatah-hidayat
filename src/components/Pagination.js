import React from 'react';

const Pagination = ({totalPage, currentPage}) => {
    let page = []
    for(let i = 0; i < 12; i++){
        console.log(i, totalPage, currentPage);
        if (totalPage <= 10) {
            if (i==0) {
                if (currentPage==1)
                    page.push(<a key={'page'+i}>&laquo;</a>)
                else 
                    page.push(<a key={'page'+i} href={'?page='+(currentPage-1)}>&laquo;</a>)
            } else if (i <= 10 && i <= totalPage){
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                }
            } else {
                if (currentPage==totalPage)
                    page.push(<a key={'page'+i}>&raquo;</a>)
                else
                    page.push(<a key={'page'+i} href={'?page='+(currentPage+1)}>&raquo;</a>)
                break
            }
        } else {
            if (i==0) {
                if (currentPage==1)
                    page.push(<a key={'page'+i}>&laquo;</a>)
                else 
                    page.push(<a key={'page'+i} href={'?page='+(currentPage-1)}>&laquo;</a>)
            } else if (i==1){
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                }
            } else if (i == 2 ) {
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else if (currentPage <= 4) {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i}>...</a>)
                }
            } else if (i == 3 && i <= totalPage) {
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else if (currentPage <= 5) {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+(currentPage-2)}>{currentPage-2}</a>)
                }
            } else if (i == 4 && i <= totalPage) {
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else if (currentPage  == 1){
                    console.log('fafs');
                    page.push(<a key={'page'+i}>...</a>)
                } else if (currentPage <= 5) {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+(currentPage-1)}>{currentPage-1}</a>)
                }
            } else if (i == 5 && i <= totalPage) {
                if (i == currentPage) {
                    page.push(<a key={'page'+i} className="active" href={'?page='+i}>{i}</a>)
                } else if (currentPage == 1 ){
                    page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
                } else if (currentPage == 2 ){
                    page.push(<a key={'page'+i}>...</a>)
                } else if (currentPage <= 5) {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                } else {
                    page.push(<a key={'page'+i} className="active" href={'?page='+(currentPage)}>{currentPage}</a>)
                }
            } else if ( i == 6 && currentPage+1 <= totalPage && currentPage >=2) {
                if (currentPage == 3) {
                    page.push(<a key={'page'+i}>...</a>)
                } else if (currentPage == 4) {
                    page.push(<a key={'page'+i} href={'?page='+i}>{i}</a>)
                } else if (currentPage >= 5) {
                    page.push(<a key={'page'+i} href={'?page='+(currentPage+1)}>{currentPage+1}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
                }
            } else if (i==7 && currentPage+2<=totalPage && currentPage >= 3){
                if (currentPage == 4) {
                    page.push(<a key={'page'+i}>...</a>)
                } else if (currentPage == 3) {
                    page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
                } else {
                    page.push(<a key={'page'+i} href={'?page='+(currentPage+2)}>{currentPage+2}</a>)
                }
            } else if (i == 8 && currentPage+3 <= totalPage && currentPage >=4) {
                if (currentPage == 4)
                    page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
                else if (currentPage + 3 < totalPage)
                    page.push(<a key={'page'+i}>...</a>)
                else
                    page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
                
            } else if (i == 9 && currentPage+3 < totalPage && currentPage >=5) {
                page.push(<a key={'page'+i} href={'?page='+totalPage}>{totalPage}</a>)
            } else {
                if (currentPage==totalPage)
                    page.push(<a key={'page'+i}>&raquo;</a>)
                else
                    page.push(<a key={'page'+i} href={'?page='+(currentPage+1)}>&raquo;</a>)
                break
            }
        }
    }
    return (
        <div className="Pagination">
            {page}
        </div>
    )
}
export default Pagination