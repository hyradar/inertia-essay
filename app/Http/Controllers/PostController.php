<?php

namespace App\Http\Controllers;

use App\Models\Post;
use Illuminate\Http\Request;
use Inertia\Inertia;

class PostController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Inertia::render('Index', [
            'posts' => Post::all()
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return Inertia::render('Create');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // We will make this function without any validation
        // because this is simple CRUD example ¯\_(ツ)_/¯
        Post::create([
            'title' => $request->title,
            'body' => $request->body
        ]);
    }

    public function edit(Post $post)
    {
        return Inertia::render('Edit', [
            'post' => $post
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Post $post)
    {
        $post->update([
            'title' => $request->title,
            'body' => $request->body
        ]);
    }

    public function show(Post $post)
    {
        return Inertia::render('Show', [
            'post' => $post
        ]);
    }

    public function destroy(Post $post)
    {
        $post->delete();
    }
    
    // ...
}