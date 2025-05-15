
"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';


const categories = [
  { name: 'Lifestyle', slug: 'lifestyle' },
  { name: 'Entertainment', slug: 'entertainment' },
  { name: 'Technology', slug: 'technology' },
  {name:'Business', slug:'business'}
  
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='header  p-3  col-12 col-md-10 col-lg-12'>
      <div className="container-fluid border-black border-bottom">
        <div className="row align-items-center">
          <div className="col-4 d-flex align-items">
            <div className='categories'>
              <div className='dropdown'>
                <button
                  onClick={toggleDropdown} 
                  className='dropdownToggle'
                >
                  Categories {isOpen ? '▲' : '▼'}
                </button>
                {isOpen && (
                  <div className='dropdownMenu'>
                    {categories.map((category) => (
                      <Link
                        key={category.slug}
                        href={`/${category.slug}`}
                        className='dropdownItem'
                      >
                        {category.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
          
          <div className="col-4 text-center">
            <div className='logo'>
              <Link href="/">
                <Image 
                  src="https://cdn.prod.website-files.com/654e26ea6b3b83d910b4a897/65538efdbda9f3a9952d79e8_TAGMAG%20LOGO.svg" 
                  alt="Tagmag Logo" 
                  width={180} 
                  height={40}
                  className='logoImage'
                  priority
                />
              </Link>
            </div>
          </div>
          
          <div className="col-4">
            <div className='socialIcons'>
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer" className='socialIcon'>
                <i className="bi bi-facebook"></i>
              </Link>
              <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer" className='socialIcon'>
                <i className="bi bi-instagram"></i>
              </Link>
              <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer" className='socialIcon'>
                <i className="bi bi-twitter-x"></i>
              </Link>
              <Link href="https://pinterest.com" target="_blank" rel="noopener noreferrer" className='socialIcon'>
                <i className="bi bi-pinterest"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
      
    </header>
  );
};

export default Header;