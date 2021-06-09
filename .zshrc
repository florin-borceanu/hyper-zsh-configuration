if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

export ZSH=/Users/florinborceanu/.oh-my-zsh
export UPDATE_ZSH_DAYS=7
export SSH_KEY_PATH="~/.ssh/rsa_id"
export NVM_DIR="$HOME/.nvm"
export JAVA_HOME=$(/usr/libexec/java_home)
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

ENABLE_CORRECTION="true"
COMPLETION_WAITING_DOTS="true"
DISABLE_UNTRACKED_FILES_DIRTY="true"
plugins=(
  brew common-aliases docker gitfast github node npm yarn osx web-search nvm zsh-autosuggestions zsh-syntax-highlighting
)

[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh

source /usr/local/opt/powerlevel10k/powerlevel10k.zsh-theme
source $ZSH/oh-my-zsh.sh