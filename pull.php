<?php

// Use in the “Post-Receive URLs” section of your GitHub repo.

if ( $_POST['payload'] ) {
shell_exec( ‘cd /home/www/ILG/git-repo/ && git reset –hard HEAD && git pull’ );
}

?>hi