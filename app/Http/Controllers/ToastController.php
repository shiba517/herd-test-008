<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class ToastController extends Controller
{
    public function index() {
        return Inertia::render('Toast/Index', []);
    }

    public function create() {
        return Inertia::render('Toast/Create');
    }
}
