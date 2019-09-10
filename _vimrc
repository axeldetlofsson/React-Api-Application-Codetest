set nocompatible
let &pythonthreedll = 'C:\Program Files\Python36\python36.dll'
filetype off
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
Plugin 'gmarik/Vundle.vim'
Plugin 'tmhedberg/SimpylFold'
Plugin 'vimwiki/vimwiki'
Plugin 'vim-scripts/indentpython.vim'
Plugin 'vim-syntastic/syntastic'
Plugin 'nvie/vim-flake8'
Plugin 'scrooloose/nerdtree'
Plugin 'kien/ctrlp.vim'
Plugin 'Lokaltog/powerline', {'rtp': 'powerline/bindings/vim/'}
Plugin 'tpope/vim-fugitive'
Bundle 'Valloric/YouCompleteMe'
call vundle#end()
set encoding=utf-8
let g:ycm_autoclose_preview_window_after_completion=1
map <leader>g  :YcmCompleter GoToDefinitionElseDeclaration<CR>
"au BufRead,BufNewFile *.py,*.pyw,*.c,*.h match BadWhitespace /\s\+$/
"au BufNewFile,BufRead *.py
"     set tabstop=4
"     set softtabstop=4
"     set textwidth=79
"     set expandtab
"     set autoindent
"     set fileformat=unix
filetype plugin indent on
set splitbelow
set splitright
nmap ä <Plug>VimwikiGoBackLink
nnoremap § :NERDTreeToggle <cr>
nnoremap Q :q<cr>
nnoremap <buffer> <F5> :!python %<cr>
nnoremap <C-J> <C-W><C-J>
nnoremap <C-K> <C-W><C-K>
nnoremap <C-L> <C-W><C-L>
nnoremap <C-H> <C-W><C-H>
let g:SimpylFold_docstring_preview=1
"set foldmethod=indent 
"set foldlevel=99
nnoremap <space> za
set number
set relativenumber
hi VimwikiLink term=bold ctermfg=Cyan guifg=#80a0ff gui=bold
let python_highlight_all=1
let g:syntastic_python_checkers = ['flake8']
syntax on
set statusline+=%#warningmsg#
set statusline+=%{SyntasticStatuslineFlag()}
set statusline+=%*
let g:syntastic_always_populate_loc_list = 1
let g:syntastic_auto_loc_list = 1
let g:syntastic_check_on_open = 1
let g:syntastic_check_on_wq = 0
nnoremap q %
set tabstop=8
set ttyfast
set expandtab
set shiftwidth=4
set autoindent
