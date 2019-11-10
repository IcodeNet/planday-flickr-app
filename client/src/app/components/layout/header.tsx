import React from 'react';

import './header.style.scss';
import { useImagesState } from './../../store';

export const Header = () => {
  const { state, actions } = useImagesState();
  const searchTerm = state.searchTerm;
  const { loadFlickrImages } = actions;


  const searchTermChanged = () => {
    const newTermInput: HTMLInputElement = document.getElementById("search-field") as HTMLInputElement;
    console.log(newTermInput.value);
    const newTerm = newTermInput.value;
    loadFlickrImages({term: newTerm});
  }

  return (
    <header>
      <div className="top-menu">
        <a href="/"></a>
        <nav>
          <a className="desktop"><div className="active">Explore</div></a>
          <a className="desktop"><div>Create</div></a>
          <a className="desktop"><div>Get Pro</div></a>
        </nav>
        <div className="action-menu">
          <div className="action-buttons">
            <span>
              <span className="search" aria-label="Search">
                <i className="icon-search" onClick={searchTermChanged}></i>
                <input type="text"
                  id="search-field"
                  placeholder="Photos, people, or groups"
                  name="search-field"
                  defaultValue={searchTerm}
                  onKeyPress={(e) => {
                    if (e.keyCode === 13 || e.which === 13) {
                      searchTermChanged();
                    }
                  }}
                  aria-label="Search" role="textbox"></input>
              </span>
            </span>
            <a className="small"><i className="icon-mail4"></i></a>
            <a className="desktop"><span>Log In</span></a>
            <a className="desktop register"><span>Sign Up</span></a>
            <a className="desktop small hide-on-mobile"><i className="icon-upload2"></i></a>
          </div>
        </div>
      </div>

    </header>
  );
};
