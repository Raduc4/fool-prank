#![cfg_attr(
    all(not(debug_assertions), target_os = "windows"),
    windows_subsystem = "windows"
)]
use rand::Rng;
use serde::{Deserialize, Serialize};

#[derive(Serialize, Deserialize)]
pub struct Coords {
    top: u8,
    left: u8,
}
// Learn more about Tauri commands at https://tauri.app/v1/guides/features/command
#[tauri::command]
fn change_coords() -> Coords {
    let mut rng = rand::thread_rng();

    Coords {
        top: rng.gen_range(10..200),
        left: rng.gen_range(10..200),
    }
}

fn main() {
    tauri::Builder::default()
        .invoke_handler(tauri::generate_handler![change_coords])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
