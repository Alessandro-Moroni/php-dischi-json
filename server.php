<?php

$json_string = file_get_contents('dischi.json');

$list = json_decode($json_string);

if(isset($_POST['newAlbumTitle'])){
  $new_item = [
    
    'title' => $_POST['newAlbumTitle'],
    'author' => $_POST['newAlbumAuthor'],
    'year' => $_POST['newAlbumYear'],
    'poster' => $_POST['newAlbumPoster'],
    'genre' => $_POST['newAlbumGenre'],
  ];
  $list[] = $new_item;
  file_put_contents('dischi.json', json_encode($list));
}

if(isset($_POST['deleteIndex'])){
  $deleteIndex = $_POST['deleteIndex'];
  array_splice($list, $deleteIndex, 1);
  file_put_contents('dischi.json', json_encode($list));
}

header('Content-Type: application/json');

echo json_encode($list);
?>